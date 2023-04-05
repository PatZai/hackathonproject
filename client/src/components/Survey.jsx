// import React, { useState } from 'react';
// // import Header from './Header';
// // import Question from './Question';
// // import Result from './Result';

// const Survey = () => {
//   const [step, setStep] = useState(1);
//   const [answers, setAnswers] = useState([]);

//   const questions = [
//     {
//       id: 1,
//       question: 'What is your favorite color?',
//       options: [
//         { id: 1, text: 'Red' },
//         { id: 2, text: 'Blue' },
//         { id: 3, text: 'Green' },
//         { id: 4, text: 'Yellow' }
//       ]
//     },
//     {
//       id: 2,
//       question: 'What is your favorite animal?',
//       options: [
//         { id: 1, text: 'Dog' },
//         { id: 2, text: 'Cat' },
//         { id: 3, text: 'Bird' },
//         { id: 4, text: 'Fish' }
//       ]
//     },
//     {
//       id: 3,
//       question: 'What is your favorite food?',
//       options: [
//         { id: 1, text: 'Pizza' },
//         { id: 2, text: 'Burger' },
//         { id: 3, text: 'Sushi' },
//         { id: 4, text: 'Tacos' }
//       ]
//     }
//   ];

//   const handleNext = (answer) => {
//     setAnswers([...answers, answer]);
//     setStep(step + 1);
//   };

//   const handleRestart = () => {
//     setAnswers([]);
//     setStep(1);
//   };

//   return (
//     <div>
//       <Header />
//       {step <= questions.length ? (
//         <Question
//           question={questions[step - 1]}
//           onAnswer={handleNext}
//         />
//       ) : (
//         <Result answers={answers} onRestart={handleRestart} />
//       )}
//     </div>
//   );
// };

// export default Survey;

import React from 'react';

const Survey = () => {
	return (
		<div id="survey">
			<div class="progress">
				<div class="progress_inner">
					<div class="progress_inner__step">
						<label for="step-1">Start order</label>
					</div>
					<div class="progress_inner__step">
						<label for="step-2">Prepare gift</label>
					</div>
					<div class="progress_inner__step">
						<label for="step-3">Pack gift</label>
					</div>
					<div class="progress_inner__step">
						<label for="step-4">Decorate box</label>
					</div>
					<div class="progress_inner__step">
						<label for="step-5">Send gift</label>
					</div>
					<input checked="checked" id="step-1" name="step" type="radio" />
					<input id="step-2" name="step" type="radio" />
					<input id="step-3" name="step" type="radio/" />
					<input id="step-4" name="step" type="radio" />
					<input id="step-5" name="step" type="radio" />
					<div class="progress_inner__bar"></div>
					<div class="progress_inner__bar--set"></div>
					<div class="progress_inner__tabs">
						<div class="tab tab-0">
							<h1>Start order</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
								tortor ipsum, eleifend vitae massa non, dignissim finibus eros.
								Maecenas non eros tristique nisl maximus sollicitudin.
							</p>
						</div>
						<div class="tab tab-1">
							<h1>Prepare gift</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
								tortor ipsum, eleifend vitae massa non, dignissim finibus eros.
								Maecenas non eros tristique nisl maximus sollicitudin.
							</p>
						</div>
						<div class="tab tab-2">
							<h1>Pack gift</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
								tortor ipsum, eleifend vitae massa non, dignissim finibus eros.
								Maecenas non eros tristique nisl maximus sollicitudin.
							</p>
						</div>
						<div class="tab tab-3">
							<h1>Decorate box</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
								tortor ipsum, eleifend vitae massa non, dignissim finibus eros.
								Maecenas non eros tristique nisl maximus sollicitudin.
							</p>
						</div>
						<div class="tab tab-4">
							<h1>Send gift</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
								tortor ipsum, eleifend vitae massa non, dignissim finibus eros.
								Maecenas non eros tristique nisl maximus sollicitudin.
							</p>
						</div>
					</div>
					<div class="progress_inner__status">
						<div class="box_base"></div>
						<div class="box_lid"></div>
						<div class="box_ribbon"></div>
						<div class="box_bow">
							<div class="box_bow__left"></div>
							<div class="box_bow__right"></div>
						</div>
						<div class="box_item"></div>
						<div class="box_tag"></div>
						<div class="box_string"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Survey;
