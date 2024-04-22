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

import Like from './components/like';

function App() {
  return (
    <div>
      <Like
        onLike={() => {
          console.log('click');
        }}
      />
    </div>
  );
}

export default App;
