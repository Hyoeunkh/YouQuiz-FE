import React, { useState } from "react";
import QuizTitle from "../../component/base/QuizTitle";
import "../../style/FirstQuestion.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShortAnswer = () => {
	const [checked, setChecked] = useState(false);

	const handleChecked = () => {
        setChecked(!checked);
	};
	return (
	<>
		<QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" />
		<div className="firstq-container">
			<div className="question">
				<h1>Q1</h1>
				<Container className="problem-container">첫번째 문제</Container>
			</div>
            <ul className="radio-list">
                <label for="choice1">
                    <input type="radio" id="choice1" name="choice" value="1" onChange={handleChecked} className="radio2"/>
                    휘영님감사해요..
                </label>
                <label for="choice2">
                    <input type="radio" id="choice2" name="choice" value="2" onChange={handleChecked}/>
                    휘영님감사해요..
                </label>
                <label for="choice3">
                    <input type="radio" id="choice3" name="choice" value="3" onChange={handleChecked}/>
                    불주먹형철은귀엽다
                </label>
                <label for="choice4">
                    <input type="radio" id="choice4" name="choice" value="4" onChange={handleChecked}/>
                    대한민국 교권은 크게 추락하였다
                </label>
                <label for="choice5">
                    <input type="radio" id="choice5" name="choice" value="5" onChange={handleChecked}/>
                    빨리끝나랑
                    {/*<img width="50" height="50" src="https://img.icons8.com/ios/50/19a05e/1-circle.png" alt="1-circle"/>*/}
                </label>
            </ul>
		</div>
		<div className="btn">
			<Link to="/quizmedia">
				<img width="80" height="80" src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="circled-left-2"/>
			</Link>
			<Link to="/secondq">
                <img width="80" height="80" src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png" alt="circled-left-2"/>
			</Link>
		</div>
	</>
	)
}

export default ShortAnswer;
