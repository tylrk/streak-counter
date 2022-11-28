interface Streak {
    currentCount: number
    startDate: string
    lastLoginDate: string
};

export function streakCounter(storage: Storage, date: Date): Streak {
    // The type 'Storage' represents localStorage
    return {
        currentCount: 0,
        startDate: '11/27/2022',
        lastLoginDate: '11/27/2022',
    }
};