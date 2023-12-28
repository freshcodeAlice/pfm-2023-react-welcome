import React, { Component } from 'react';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';

function PhoneLoader (props) {
    const {data, error, isFetching} = useData(() => {
        return fetch('/phones.json')
        .then(res => res.json())
  });
   
    return (
        <ol>
              {data.map(p => <li key={p.id}>{p.brand} - {p.model}</li>)}
              {error & <p>Ooops, error</p>}
              {isFetching && <Spinner />}
         </ol>
    )
  
}

export default PhoneLoader;


/*
переписати userLoader на використання кастомного хука useData
*/