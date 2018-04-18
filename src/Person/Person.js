import React from 'react'; // 얠 데려와야 jsx문법을 유효하게 사용할 수 있음!!

const person = (props) => { // props argument를 pass 해줘야 다른데서 이 아이의 property에 자유로이 접근 및 정의?할 수 있음!
	return <p>I'm {props.name}! and I am {Math.floor(Math.random() * 30)} years old!</p>
};                                    // plain javascript코드 쓰려면 이렇게 { } 얘로 감싸줘야 함!!
						             // still, 아예 자바스크립트 class를 갖다쓰진 못함. 걍 간단한 dynamic 한줄코드 정도만..

// * when using a class-based component, it's this.props 
    // (class component 내부에서 언급되는 props 앞에는 반드시 this.이 붙어야 함~~ 위에처럼 바로 props.name같이 쓸 수 없음)			           
export default person;