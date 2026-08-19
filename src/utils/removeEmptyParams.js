export const removeEmptyParams = params =>
    Object.fromEntries(Object.entries(params).filter(([, value]) => value !== ''));
