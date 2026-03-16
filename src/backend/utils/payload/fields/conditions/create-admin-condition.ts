export const createAdminCondition = (
  conditionField?: string,
  conditionValue?: string | number | boolean,
) => {
  return (data: Record<string, unknown>) => {
    if (!conditionField) return true
    return data?.[conditionField] === conditionValue
  }
}
