import React, { Component } from 'react';
import ReactLoading from "react-loading";
const Loading = () => (
    <div className="loading1">
    <div className="loading">
	<ReactLoading type="spin" color="red" height={300} width={200} />
    </div>
    </div>
);
export default Loading;