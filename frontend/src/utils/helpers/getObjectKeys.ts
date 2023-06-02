export const getObjectKeys = <T extends Record<string, unknown>>(obj: T): { [K in keyof T]: K } => {
    const keys = Object.keys(obj) as Array<keyof T>;
    const controlledFieldName: Partial<{ [K in keyof T]: K }> = {};

    for (const key of keys) {
        controlledFieldName[key] = key;
    }

    return controlledFieldName as { [K in keyof T]: K };
};