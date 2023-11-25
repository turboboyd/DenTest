export const handlePending = (state) => {
    state.error = null;
    state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
};
export const handleFulfilledFilter = (state, { payload }) => {
    state.exercisesFilter = payload.data;
    state.totalRecords = payload.totalRecords;
    state.isLoading = false;
    state.error = null;
};
export const handleFulfilledItemsSelectedFilter = (state, { payload }) => {
    state.getMore = payload.data.length > 0
    state.itemsSelectedFilter.push(...payload.data);
    state.isLoading = false;
    state.error = null;
};
