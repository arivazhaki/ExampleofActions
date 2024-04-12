const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });

const actions = { increaseCount, setShape };

export default actions;
