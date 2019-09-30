import React, { Component } from 'react';
import Select from 'react-select';
const shellOps = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];
const baseOps = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];
const mixinOps = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];
const seasoningOps = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];
const condimentOps = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];
class Form extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			name: '',
			shell: shellOps[0],
			base: baseOps[0],
			mixins: null,
			seasoning: seasoningOps[0],
			condiments: null
		};

		this.state = this.initialState;
	}

	submitForm = () => {
		const { mixins, condiments } = this.state;
		if (mixins && condiments) {
			this.props.handleSubmit(this.state);
			this.setState(this.initialState);
		} else alert('Please add at least one condiment and one mixin');
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		const { name, shell, base, mixins, seasoning, condiments } = this.state;

		return (
			<form>
				{/* Name */}
				<label>Name</label>
				<input type="text" name="name" value={name} onChange={this.handleChange} />
				{/* Shell */}
				<label>Shell</label>
				<Select
					value={shell}
					onChange={(shell) => {
						this.setState({ shell });
					}}
					options={shellOps}
				/>
				{/* Base */}
				<label>Base Layer</label>
				<Select
					value={base}
					onChange={(base) => {
						this.setState({ base });
					}}
					options={baseOps}
				/>
				{/* Mixin(s) */}
				<label>Mixins (1 - 2)</label>
				<Select
					isMulti
					value={mixins}
					onChange={(mixins) => {
						if (!mixins || mixins.length < 3) this.setState({ mixins });
					}}
					options={mixinOps}
				/>
				{/* Seasoning(s) */}
				<label>Seasoning</label>
				<Select
					value={seasoning}
					onChange={(seasoning) => {
						this.setState({ seasoning });
					}}
					options={seasoningOps}
				/>
				{/* Condiment(s) */}
				<label>Condiments (1 - 3)</label>
				<Select
					isMulti
					value={condiments}
					onChange={(condiments) => {
						if (!condiments || condiments.length < 4) this.setState({ condiments });
					}}
					options={condimentOps}
				/>
				<br />
				{/* Submit Button */}
				<input type="button" value="Submit" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Form;
