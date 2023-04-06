// import React from 'react';
// import './style.css';
// // import './Survey.js';
// // import { Helmet } from 'react-helmet';

// import { $ } from 'jquery';

// // A personality quiz

// // This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt.
// // If a personality trait is considered more introverted, it will have a negative weight.
// // If a personlity trait is considered more extroverted, it will have a positive weight.

// const prompts = [
// 	{
// 		prompt: 'I find it difficult to introduce myself to people hi',
// 		weight: -1,
// 		class: 'group0',
// 	},
// 	{
// 		prompt: 'I get so lost in my thoughts I ignore or forget my surroundings',
// 		weight: -1,
// 		class: 'group1',
// 	},
// 	{
// 		prompt: 'I do not usually initiate conversations',
// 		weight: -1,
// 		class: 'group2',
// 	},
// 	{
// 		prompt: 'I prefer not to engage with people who seem angry or upset',
// 		weight: -1,
// 		class: 'group3',
// 	},
// 	{
// 		prompt: 'I choose my friends carefully',
// 		weight: -1,
// 		class: 'group4',
// 	},
// 	{
// 		prompt: 'I find it difficult to tell stories about myself',
// 		weight: -1,
// 		class: 'group5',
// 	},
// 	{
// 		prompt: 'I am usually highly motivated and energetic',
// 		weight: 1,
// 		class: 'group6',
// 	},
// 	{
// 		prompt:
// 			'I find it easy to walk up to a group of people and join in conversation',
// 		weight: 1,
// 		class: 'group7',
// 	},
// 	{
// 		prompt: 'Being adaptable is more important than being organized',
// 		weight: 1,
// 		class: 'group8',
// 	},
// 	{
// 		prompt:
// 			'I care more about making sure no one gets upset than winning a debate',
// 		weight: 1,
// 		class: 'group9',
// 	},
// 	{
// 		prompt: 'I often do not feel I have to justify myself to people',
// 		weight: 1,
// 		class: 'group10',
// 	},
// 	{
// 		prompt:
// 			'I would rather improvise than spend time coming up with a detailed plan',
// 		weight: 1,
// 		class: 'group11',
// 	},
// ];

// // This array stores all of the possible values and the weight associated with the value.
// // The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
// const prompt_values = [
// 	{
// 		value: 'Strongly Agree',
// 		class: 'btn-default btn-strongly-agree',
// 		weight: 5,
// 	},
// 	{
// 		value: 'Agree',
// 		class: 'btn-default btn-agree',
// 		weight: 3,
// 	},
// 	{
// 		value: 'Neutral',
// 		class: 'btn-default',
// 		weight: 0,
// 	},
// 	{
// 		value: 'Disagree',
// 		class: 'btn-default btn-disagree',
// 		weight: -3,
// 	},
// 	{
// 		value: 'Strongly Disagree',
// 		class: 'btn-default btn-strongly-disagree',
// 		weight: -5,
// 	},
// ];

// // For each prompt, create a list item to be inserted in the list group
// function createPromptItems() {
// 	for (var i = 0; i < prompts.length; i++) {
// 		var prompt_li = document.createElement('li');
// 		var prompt_p = document.createElement('p');
// 		var prompt_text = document.createTextNode(prompts[i].prompt);

// 		prompt_li.setAttribute('class', 'list-group-item prompt');
// 		prompt_p.appendChild(prompt_text);
// 		prompt_li.appendChild(prompt_p);

// 		document.getElementById('quiz').appendChild(prompt_li);
// 	}
// }

// // For each possible value, create a button for each to be inserted into each li of the quiz
// // function createValueButtons() {

// // 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// // 		for (var i = 0; i < prompt_values.length; i++) {
// // 			var val_button = document.createElement('button');
// // 			var val_text = document.createTextNode(prompt_values[i].value);

// // 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// // 			val_button.appendChild(val_text);

// // 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// // 		}
// // 	}
// // }
// function createValueButtons() {
// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		var group = document.createElement('div');
// 		group.className = 'btn-group btn-group-justified';

// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var btn_group = document.createElement('div');
// 			btn_group.className = 'btn-group';

// 			var button = document.createElement('button');
// 			var button_text = document.createTextNode(prompt_values[i].value);
// 			button.className =
// 				'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
// 			button.appendChild(button_text);

// 			btn_group.appendChild(button);
// 			group.appendChild(btn_group);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(group);
// 		}
// 	}
// }

// createPromptItems();
// createValueButtons();

// // Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// // Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
// var total = 0;

// // Get the weight associated to group number
// function findPromptWeight(prompts, group) {
// 	var weight = 0;

// 	for (var i = 0; i < prompts.length; i++) {
// 		if (prompts[i].class === group) {
// 			weight = prompts[i].weight;
// 		}
// 	}

// 	return weight;
// }

// // Get the weight associated to the value
// function findValueWeight(values, value) {
// 	var weight = 0;

// 	for (var i = 0; i < values.length; i++) {
// 		if (values[i].value === value) {
// 			weight = values[i].weight;
// 		}
// 	}

// 	return weight;
// }

// // When user clicks a value to agree/disagree with the prompt, display to the user what they selected
// $('.value-btn').mousedown(function () {
// 	var classList = $(this).attr('class');
// 	// console.log(classList);
// 	var classArr = classList.split(' ');
// 	// console.log(classArr);
// 	var this_group = classArr[0];
// 	// console.log(this_group);

// 	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
// 	// Otherwise, de-select any selected buttons in group and select the one just clicked
// 	// And subtract deselected weighted value and add the newly selected weighted value to the total
// 	if ($(this).hasClass('active')) {
// 		$(this).removeClass('active');
// 		total -=
// 			findPromptWeight(prompts, this_group) *
// 			findValueWeight(prompt_values, $(this).text());
// 	} else {
// 		// $('[class='thisgroup).prop('checked', false);
// 		total -=
// 			findPromptWeight(prompts, this_group) *
// 			findValueWeight(prompt_values, $('.' + this_group + '.active').text());
// 		// console.log($('.'+this_group+'.active').text());
// 		$('.' + this_group).removeClass('active');

// 		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
// 		// $(this).prop('checked', true);
// 		$(this).addClass('active');
// 		total +=
// 			findPromptWeight(prompts, this_group) *
// 			findValueWeight(prompt_values, $(this).text());
// 	}

// 	console.log(total);
// });

// $('#submit-btn').click(function () {
// 	// After clicking submit, add up the totals from answers
// 	// For each group, find the value that is active
// 	$('.results').removeClass('hide');
// 	$('.results').addClass('show');

// 	if (total < 0) {
// 		// document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
// 		// console.log(document.getElementById('intro-bar').style.width);
// 		// document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
// 		document.getElementById('results').innerHTML =
// 			'<b>You are introverted!</b><br><br>\
//           Introverts are tricky to understand, since it’s so easy for us to assume that introversion is the same as being shy, when, in fact, introverts are simply people who find it tiring to be around other people.\n\
//   <br><br>\
//   I love this explanation of an introvert’s need to be alone:\n\
//   <br><br>\
//   For introverts, to be alone with our thoughts is as restorative as sleeping, as nourishing as eating.\n\n\
//   <br><br>\
//   Introverted people are known for thinking things through before they speak, enjoying small, close groups of friends and one-on-one time, needing time alone to recharge, and being upset by unexpected changes or last-minute surprises. Introverts are not necessarily shy and may not even avoid social situations, but they will definitely need some time alone or just with close friends or family after spending time in a big crowd.\
//           ';
// 	} else if (total > 0) {
// 		document.getElementById('results').innerHTML =
// 			'<b>You are extroverted!</b><br><br>\
//           On the opposite side of the coin, people who are extroverted are energized by people. They usually enjoy spending time with others, as this is how they recharge from time spent alone focusing or working hard.\
//   <br><br>\
//   I like how this extrovert explains the way he/she gains energy from being around other people:\
//   <br><br>\
//   When I am among people, I make eye contact, smile, maybe chat if there’s an opportunity (like being stuck in a long grocery store line). As an extrovert, that’s a small ‘ping’ of energy, a little positive moment in the day.';
// 	} else {
// 		document.getElementById('results').innerHTML =
// 			'<b>You are ambiverted!</b><br><br>\
//           Since introverts and extroverts are the extremes of the scale, the rest of us fall somewhere in the middle. Many of us lean one way or the other, but there are some who are quite balanced between the two tendencies. These people are called ambiverts.\
//   <br><br>\
//   So let’s look at how an ambivert compares.\
//   <br><br>\
//   Ambiverts exhibit both extroverted and introverted tendencies. This means that they generally enjoy being around people, but after a long time this will start to drain them. Similarly, they enjoy solitude and quiet, but not for too long. Ambiverts recharge their energy levels with a mixture of social interaction and alone time.';
// 	}

// 	// Hide the quiz after they submit their results
// 	$('#quiz').addClass('hide');
// 	$('#submit-btn').addClass('hide');
// 	$('#retake-btn').removeClass('hide');
// });

// // Refresh the screen to show a new quiz if they click the retake quiz button
// $('#retake-btn').click(function () {
// 	$('#quiz').removeClass('hide');
// 	$('#submit-btn').removeClass('hide');
// 	$('#retake-btn').addClass('hide');

// 	$('.results').addClass('hide');
// 	$('.results').removeClass('show');
// });

// const Survey = () => {
// 	return (
// 		<div>
// 			<link rel="stylesheet" type="text/css" href="css/animate.css" />

// 			<link
// 				rel="stylesheet"
// 				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
// 				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
// 				crossorigin="anonymous"
// 			/>

// 			<link rel="stylesheet" type="text/css" href="css/main.css" />

// 			<div class="container text-center">
// 				<h1>Personality Test</h1>
// 			</div>
// 			<div class="container text-center">
// 				<ul id="quiz" class="list-group"></ul>
// 			</div>

// 			<div class="container text-center hide results">
// 				<img
// 					src="https://raw.githubusercontent.com/danubevictoria/quiz/master/images/results1.jpg"
// 					class="results col-md-4 col-sm-4 col-xs-4"
// 					alt=""
// 				/>
// 				<img
// 					src="https://raw.githubusercontent.com/danubevictoria/quiz/master/images/results2.jpg"
// 					class="results col-md-4 col-sm-4 col-xs-4"
// 					alt=""
// 				/>
// 				<img
// 					src="https://raw.githubusercontent.com/danubevictoria/quiz/master/images/results3.jpg"
// 					class="results col-md-4 col-sm-4 col-xs-4"
// 					alt=""
// 				/>
// 			</div>

// 			<div class="container text-center results hide">
// 				<p id="results"></p>
// 			</div>

// 			<div class="container text-center bottom">
// 				<button id="submit-btn" class="btn btn-primary btn-lg">
// 					Submit
// 				</button>

// 				<button id="retake-btn" class="hide btn btn-primary btn-lg">
// 					Retake Quiz
// 				</button>
// 			</div>

// 				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

// 				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
// 				<script
// 					src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
// 					integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
// 					crossorigin="anonymous"
// 				></script>

// 		</div>
// 	);
// };

// export default Survey;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const questions = [
	{
		questionText: 'What is your favorite color?',
		answerOptions: [
			{ answerText: 'Red', personalityType: 'A' },
			{ answerText: 'Blue', personalityType: 'B' },
			{ answerText: 'Green', personalityType: 'C' },
			{ answerText: 'Yellow', personalityType: 'D' },
		],
	},
	{
		questionText: 'What is your favorite hobby?',
		answerOptions: [
			{ answerText: 'Reading', personalityType: 'A' },
			{ answerText: 'Sports', personalityType: 'B' },
			{ answerText: 'Art', personalityType: 'C' },
			{ answerText: 'Traveling', personalityType: 'D' },
		],
	},
	{
		questionText: 'What is your favorite type of food?',
		answerOptions: [
			{ answerText: 'Italian', personalityType: 'A' },
			{ answerText: 'Mexican', personalityType: 'B' },
			{ answerText: 'Japanese', personalityType: 'C' },
			{ answerText: 'Indian', personalityType: 'D' },
		],
	},
];

const personalityTypes = {
	A: 'Type A',
	B: 'Type B',
	C: 'Type C',
	D: 'Type D',
};

function PersonalityTest() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [showResult, setShowResult] = useState(false);

	const handleAnswerClick = (personalityType) => {
		setAnswers([...answers, personalityType]);

		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			// Show result
			setShowResult(true);
		}
	};

	const handleRetakeQuiz = () => {
		setCurrentQuestion(0);
		setAnswers([]);
		setShowResult(false);
	};

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="row">
						<div className="table table-border form-control">
							<div className="card-body">
								{showResult ? (
									<>
										<h1 className="text-center mb-4">
											Your personality is{' '}
											{
												personalityTypes[
													answers.reduce(
														(a, b) =>
															answers.filter((v) => v === a).length >=
															answers.filter((v) => v === b).length
																? a
																: b,
														null
													)
												]
											}
											!
										</h1>
										<button
											className="btn btn-primary btn-block"
											onClick={handleRetakeQuiz}
										>
											Retake Quiz
										</button>
									</>
								) : (
									<>
										<h1 className="text-center mb-4">
											{questions[currentQuestion].questionText}
										</h1>
										<div className="d-flex justify-content-center">
											<div className="btn-group-vertical">
												{questions[currentQuestion].answerOptions.map(
													(answerOption) => (
														<button
															key={answerOption.answerText}
															className="btn btn-secondary"
															onClick={() =>
																handleAnswerClick(answerOption.personalityType)
															}
														>
															{answerOption.answerText}
														</button>
													)
												)}
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PersonalityTest;
