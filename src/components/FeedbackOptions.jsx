import s from './FeedBackStyles.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
	<div className={s.section__group}>
		{options.map((option, index) => (
			<button
				key={index}
				className=''
				onClick={() => {
					onLeaveFeedback(option);
				}}
			>
				{option}
			</button>
		))}
	</div>
);

export default FeedbackOptions;
