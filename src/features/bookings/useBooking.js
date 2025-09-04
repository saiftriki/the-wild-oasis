import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking = null,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, // By default, React Query retries a failed query 3 times. We set this to 'false' because if the fetching of a specific item (like a booking) fails once, it likely means the item doesn't exist, and retrying won't change that.
  });

  return { isLoading, error, booking };
}
