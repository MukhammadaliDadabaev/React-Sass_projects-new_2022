
import './index.scss';
import {useState} from "react";

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/"><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({ question, step, onClickVariant}) {
  //width-percent
  const percentage = Math.round((step / question.length) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => onClickVariant(index)} >{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  //FUNC
  const onClickVariant = (index) => {
    console.log(step, index)
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step === question.length ? <Game question={question} onClickVariant={onClickVariant} step={step} /> : <Result correct={correct} />

      }
    </div>
  );
}

export default App;






// 3-Usul Anim-modal_________________________________
// import React, {useState} from 'react';
// import './index.scss';
//
//
// const Modal = ({open, setOpen, childern}) =>  (
//     <div className={`overlay animated ${open ? "show" : ""}`}>
//       <div className="modal">
//         <svg onClick={() => setOpen(false)} height="50" viewBox="0 0 150 200" width="200">
//           <title />
//           <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//         </svg>
//         {childern}
//       </div>
//     </div>
//   );
//
//
// function App() {
//   const [open, setOpen] = useState(false)
//   return (
//     <div className="App">
//       <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
//       <Modal open={open} setOpen={setOpen}>
//         <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
//         <h3>Modal Card</h3>
//         <button>Close</button>
//       </Modal>
//     </div>
//   );
// }
// export default App;

// 2-Usul Anim-modal___________________________________
// import React, {useState} from 'react';
// import './index.scss';
//
// const Modal = ({open, setOpen}) =>  (
//   <div className={`overlay animated ${open ? "show" : ""}`}>
//     <div className="modal">
//       <svg onClick={() => setOpen(false)} height="50" viewBox="0 0 150 200" width="200">
//         <title />
//         <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//       </svg>
//       <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
//     </div>
//   </div>
// );
//
//
// function App() {
//   const [open, setOpen] = useState(false)
//   return (
//     <div className="App">
//       <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
//       {/*{open && <Modal open={open} setOpen={setOpen}/>}*/}
//       <Modal open={open} setOpen={setOpen}/>
//     </div>
//   );
// }
// export default App;


//1-Usul Bez-anim-modal______________________________________________
// import React, {useState} from 'react';
// import './index.scss';
//
// function App() {
//   const [open, setOpen] = useState(false)
//   return (
//     <div className="App">
//       <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
//       {
//         open && (
//           <div className="overlay ">
//             <div className="modal">
//               <svg onClick={() => setOpen(false)} height="50" viewBox="0 0 150 200" width="200">
//                 <title />
//                 <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//               </svg>
//               <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
//             </div>
//           </div>
//         )
//       }
//     </div>
//   );
// }
//
// export default App;

//1-Count________________________________________________________
// COUNT
// import './index.scss';
//
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <h2>Счетчик:</h2>
//         <h1>0</h1>
//         <button className="minus">- Минус</button>
//         <button className="plus">Плюс +</button>
//       </div>
//     </div>
//   );
// }
//
// export default App;