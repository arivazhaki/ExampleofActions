const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setSize = ({ data }) => ({ size: data });
const setColor = ({ data }) => ({ color: data });

const actions = { increaseCount, setShape, setSize, setColor };

export default actions;
