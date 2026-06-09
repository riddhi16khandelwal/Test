const TYPE_WEIGHT = {
    Placement: 3,
    Result: 2,
    Event: 1
};

const TOP_N = 10;

const notifications = [
    {
        ID: "1",
        Type: "Placement",
        Message: "CSX Hiring",
        Timestamp: "2026-04-22 17:51:18"
    },
    {
        ID: "2",
        Type: "Result",
        Message: "Mid Sem",
        Timestamp: "2026-04-22 17:51:30"
    },
    {
        ID: "3",
        Type: "Event",
        Message: "Farewell",
        Timestamp: "2026-04-22 17:51:06"
    },
    {
        ID: "4",
        Type: "Placement",
        Message: "AMD Hiring",
        Timestamp: "2026-04-22 17:49:42"
    }
];

function getTopNotifications(data, n = TOP_N) {

    return data.sort((a, b) => {

        const weightDiff =
            TYPE_WEIGHT[b.Type] -
            TYPE_WEIGHT[a.Type];

        if (weightDiff !== 0) {
            return weightDiff;
        }

        return (
            new Date(b.Timestamp) -
            new Date(a.Timestamp)
        );
    }).slice(0, n);
}

const result =
    getTopNotifications(notifications);

console.log(
    "\n===== TOP NOTIFICATIONS =====\n"
);

console.table(result);