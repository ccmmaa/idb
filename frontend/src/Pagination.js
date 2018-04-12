import React, { Component } from 'react';


function prevPage() {
	if (this.state.page != 1)
	this.getPage(this.state.page - 1);
}

function nextPage() {
	if (this.state.page != this.state.lastpage)
	this.getPage(this.state.page + 1);
}

function paginationBar(currentPage, lastPage, scale, getPage) {
	var bar = [];
	if (currentPage!=1) {
		bar.push(<span><span onClick={() => getPage(1)} className="paginationClickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
		bar.push(<span><span onClick={() => prevPage()} className="paginationClickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
	}
	else {
		bar.push(<span><span className="paginationUnclickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
		bar.push(<span><span className="paginationUnclickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
	}
	if (currentPage < scale/2)
		for (var index = 1; index <= lastPage && index <= scale; index++) {
			bar.push(pageBarHelper(index, currentPage));
		}
	else if (currentPage > lastPage-scale/2) {
		var start = lastPage-scale+1;
		if (start < 1)
			start = 1;
		for (var index = start; index <= lastPage; index++) {
			bar.push(pageBarHelper(index, currentPage));
		}
	}
	else {
		for (var index = currentPage-scale/2+1; index <= currentPage + scale/2; index++) {
			if (index != 0)
			bar.push(pageBarHelper(index, currentPage));
		}
	}
	if (currentPage!=lastPage) {
		bar.push(<span><span onClick={() => nextPage()} className="paginationClickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
		bar.push(<span><span onClick={() => getPage(state.lastpage)} className="paginationClickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
	}
	else {
		bar.push(<span><span className="paginationUnclickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
		bar.push(<span><span className="paginationUnclickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
	}
	return bar;
}

function pageBarHelper(index, currentPage) {
	if (index == currentPage) 
		return(<span>{index}&nbsp;&nbsp;&nbsp;</span>);
	else return(<span><span onClick={() => getPage(index)} className="paginationClickable orange">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
}

