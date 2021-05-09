import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/counterSlice";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => {
		return state.counter.count;
	});
	return (
		<div>
			<h3>Count: {count}</h3>
			<div>
				<button
					onClick={() => {
						dispatch(increment());
					}}
				>
					Increment
				</button>
				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					Decrement
				</button>
				<button
					onClick={() => {
						dispatch(reset());
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
