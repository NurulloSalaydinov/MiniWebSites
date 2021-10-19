const BudgetAccomodation = {
	data(){
		return{
			first: false,
			myBudget: 0,
			myIncome: 0,
			myExpense: 0,
			deleteItem: 'x',
			history: []
		}
	},
	methods: {
		getInfo: function () {
			let b = this.myBudget;
			b = parseInt(b);
			let i = this.myIncome;
			i = parseInt(i);
			let e = this.myExpense;
			e = parseInt(e);
			document.querySelector('#demo1').innerHTML = b;
			document.querySelector('#demo2').innerHTML = i;
			document.querySelector('#demo3').innerHTML = e;
			document.querySelector('#demo4').innerHTML = b + i - e;
		},
		add: function() {
			let budgetname = prompt('Name of Your Budget');
			let b = this.myBudget;
			b = parseInt(b);
			let i = this.myIncome;
			i = parseInt(i);
			let e = this.myExpense;
			e = parseInt(e);
			let totalEarnings = b + i - e;
			this.first = true;
			this.history.push({name: budgetname,budget:"Budget "+ b, income:"Income "+ i, expense:"Expense "+ e, total:"Total "+ totalEarnings, delete: this.deleteItem});
		},
		deleteFunction: function(idx) {
			this.history.shift(idx)
		}
	}
}
Vue.createApp(BudgetAccomodation).mount('#budget');