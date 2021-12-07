import './App.scss';
import React, { Component } from 'react';
import FeedBackStatistics from './components/FeedBackStatistics';
import FeedbackOptions from './components/FeedbackOptions';
import FeedbackSection from './components/FeedbackSection';

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	onLeaveFeedback = (value) => {
		this.setState((prevState) => ({
			[value]: prevState[value] + 1,
		}));

		this.countTotalFeedback();
	};

	countTotalFeedback() {
		const { good, neutral, bad } = this.state;

		return good + neutral + bad;
	}

	countPositiveFeedbackPercentage() {
		return `${((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)}%`;
	}

	render() {
		return (
			<>
				<FeedbackSection title='Please leave feedback'>
					<FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
				</FeedbackSection>

				<FeedbackSection title='Statistics'>
					<FeedBackStatistics
						good={this.state.good}
						neutral={this.state.neutral}
						bad={this.state.bad}
						total={this.countTotalFeedback()}
						positivePercentage={this.countPositiveFeedbackPercentage()}
					/>
				</FeedbackSection>
			</>
		);
	}
}
