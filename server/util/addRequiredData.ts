export const addPostRequiredData = <T>(
  data: T,
): T & { id: string; createdAt: number; updatedAt: number } => {
  const now = Date.now();
  return { ...data, id: crypto.randomUUID(), createdAt: now, updatedAt: now };
};

export const addUpdateRequiredData = <T>(
  data: T,
): T & { updatedAt: number } => {
  const now = Date.now();
  return { ...data, updatedAt: now };
};
