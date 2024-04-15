const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setSize = ({ data }) => ({ shape: data });

const actions = { increaseCount, setShape, setSize };

export default actions;
