'use client';

import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import useAxiosPublic from '@/lib/useAxiosPublic';
import './search.css'

const Search = ({ setSValue }) => {
  const axiosPublic = useAxiosPublic();
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch suggestions from the API
  const fetchSuggestions = async (query) => {
    try {
      const response = await axiosPublic.get(`/locations?search=${query}`);
      setSuggestions(response.data); 
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        fetchSuggestions(searchQuery);
      } else {
        setSuggestions([]);
      }
    }, 300); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // Handle value change
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };


  const onSuggestionsFetchRequested = ({ value }) => {
    setSearchQuery(value);
  };

 
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  const getSuggestionValue = (suggestion) => suggestion.label;

  const renderSuggestion = (suggestion) => (
    <div className="suggestion-item">
      {suggestion.label}
    </div>
  );

  
  useEffect(() => {
    
    // console.log('inside use value->', value);
    setSValue(value);
  }, [value]);

  const inputProps = {
    placeholder: 'Search destinations',
    value,
    onChange,
  };

  return (
    <div className="search-container relative">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
};

export default Search;
