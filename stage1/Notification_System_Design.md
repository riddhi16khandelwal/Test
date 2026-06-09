# Stage 1

## Approach

Priority order:
Placement > Result > Event

For notifications with same type,
latest timestamp gets higher priority.

## Data Structure

Min Heap of size 10.

## Complexity

Time: O(N log 10)
Space: O(10)

## New Notifications

Whenever a new notification arrives,
its score is compared with the minimum
element in heap.

If score is higher,
replace the minimum notification.