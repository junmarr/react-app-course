// import ListGroup from './components/ListGroup';

// function App() {
//   let items = ['Caloocan City', 'Quezon City', 'Bulacan', 'Makati'];

//   const handleSelection = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading='Cities'
//         onSelectItem={handleSelection}
//       />
//     </div>
//   );
// }

// export default App;

//ALERT
// import Alert from './components/Alert';

// function App() {
//   return (
//     <div>
//       <Alert>
//         hello <u>World</u>
//       </Alert>
//     </div>
//   );
// }

// export default App;

//SHOW ALERT
// import Button from './components/Button';
// import Alert from './components/Alert';
// import { useState } from 'react';

// function App() {
//   const [alertVisibility, setAlertVisibility] = useState(false);

//   return (
//     <>
//       {alertVisibility && (
//         <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)}>
//         Click to show alert
//       </Button>
//     </>
//   );
// }

// export default App;

//LIKE BUTTON
// import Like from './components/like';

// function App() {
//   return (
//     <div>
//       <Like
//         onLike={() => {
//           console.log('click');
//         }}
//       />
//     </div>
//   );
// }

// export default App;

//State PERSON
// import { useState } from 'react';

// function App() {
//   const [person, setPerson] = useState({
//     firstName: 'Junmar',
//     lastName: 'Rosario',
//   });

//   const fullName = `${person.firstName} ${person.lastName}`;

//   return <div>{fullName}</div>;
// }

// export default App;

//updating object
// import { useState } from 'react';

// function App() {
//   const [drink, setDrink] = useState({
//     drink: 'Red Horse',
//     price: 55,
//   });

//   const addPrice = () => {
//     setDrink({ ...drink, price: 100 });
//   };

//   return (
//     <div>
//       <div>price: {drink.price}</div>
//       <button onClick={addPrice}>Click to add price</button>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';

function App() {
  const [love, setLove] = useState(['Junmar', 'Carmina']);

  const handleClick = () => {
    //Add new array item
    setLove([...love, 'love']);
    console.log(love);

    //remove array item
    setLove(love.filter((tag) => tag !== 'Junmar'));
    console.log(love);

    //update array item
    setLove(love.map((tag) => (tag === 'Carmina' ? 'Carmina Rosario' : tag)));
    console.log(love);
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
