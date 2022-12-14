import {SplitScreen} from "./SplitScreen";
import {RegularList} from "./RegularList";
import {SmallPersonListItem} from "./people/SmallPersonListItem";
import {LargePersonListItem} from "./people/LargePersonListItem";
import {NumberedList} from "./NumberedList";
import {LargeProductListItem} from "./products/LargeProductListItem";
import {SmallProductListItem} from "./products/SmallProductListItem";
import {Modal} from "./Modal";

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function App() {
	return (
		<>
			<Modal>
				<LargeProductListItem product={products[0]}/>
			</Modal>
		</>
	);
}

export default App;

/* ----- ----- ----- ----- ----- SIDE COMPONENTS ----- ----- ----- ----- ----- */
// const LeftHandComponent = ({name}) => (
// 	<h1>Random left {name}</h1>
// )
// const RightHandComponent = ({message}) => (
// 	<h1>Random right {message}</h1>
// )
// function App() {
// 	return (
// 		<SplitScreen leftWeight={1} rightWeight={3}>
// 			<LeftHandComponent name={'Konrad'}/>
// 			<RightHandComponent message={'Helloka'}/>
// 		</SplitScreen>
// 	);
// }

/* ----- ----- ----- ----- ----- LIST ELEMENTS ----- ----- ----- ----- ----- */
// const people = [{
// 	name: 'John Doe',
// 	age: 54,
// 	hairColor: 'brown',
// 	hobbies: ['swimming', 'bicycling', 'video games'],
// }, {
// 	name: 'Brenda Smith',
// 	age: 33,
// 	hairColor: 'black',
// 	hobbies: ['golf', 'mathematics'],
// }, {
// 	name: 'Jane Garcia',
// 	age: 27,
// 	hairColor: 'blonde',
// 	hobbies: ['biology', 'medicine', 'gymnastics'],
// }];
// const products = [{
// 	name: 'Flat-Screen TV',
// 	price: '$300',
// 	description: 'Huge LCD screen, a great deal',
// 	rating: 4.5,
// }, {
// 	name: 'Basketball',
// 	price: '$10',
// 	description: 'Just like the pros use',
// 	rating: 3.8,
// }, {
// 	name: 'Running Shoes',
// 	price: '$120',
// 	description: 'State-of-the-art technology for optimum running',
// 	rating: 4.2,
// }];
// function App() {
// 	return (
// 		<>
// 			<RegularList items={people} resourceName={'person'} itemComponent={SmallPersonListItem} />
// 			<RegularList items={people} resourceName={'person'} itemComponent={LargePersonListItem} />
// 			<NumberedList items={products} resourceName={'product'} itemComponent={LargeProductListItem} />
// 			<NumberedList items={products} resourceName={'product'} itemComponent={SmallProductListItem} />
// 		</>
// 	);
// }
