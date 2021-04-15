export const isEmptyList = obj => !Array.isArray(obj) || obj.length === 0;

export const isEmptyObject = obj => obj == null || typeof obj !== 'object' || Object.keys(obj).length === 0;