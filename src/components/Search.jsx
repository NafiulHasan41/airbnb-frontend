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
      setSuggestions(response.data); // Assuming API returns an array of location objects
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  // Fetch suggestions with debouncing
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        fetchSuggestions(searchQuery);
      } else {
        setSuggestions([]);
      }
    }, 300); // Delay for debouncing

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // Handle value change
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  // Autosuggest calls this to fetch suggestions
  const onSuggestionsFetchRequested = ({ value }) => {
    setSearchQuery(value); // Trigger the search query
  };

  // Clear suggestions when user input is cleared
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  const getSuggestionValue = (suggestion) => suggestion.label;

  // Render suggestions
  const renderSuggestion = (suggestion) => (
    <div className="suggestion-item">
      {suggestion.label}
    </div>
  );

  // Update SValue whenever value changes
  useEffect(() => {
    const selectedLocation = suggestions.find((location) => location.id === value)?.label;
    setSValue(selectedLocation);
  }, [value, suggestions]);

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
