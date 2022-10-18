import {SplitScreen} from "./SplitScreen";

const LeftHandComponent = ({name}) => (
	<h1>Random left {name}</h1>
)

const RightHandComponent = ({message}) => (
	<h1>Random right {message}</h1>
)

function App() {
	return (
		<SplitScreen leftWeight={1} rightWeight={3}>
			<LeftHandComponent name={'Konrad'}/>
			<RightHandComponent message={'Helloka'}/>
		</SplitScreen>
	);
}

export default App;
