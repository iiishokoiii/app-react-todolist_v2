import React from 'react';

export const IconButton = (props) => {
  const { onClick, svgname, clazz, optionalStyle } = props;
  const baseStyle = 'inline-flex w-10 h-10  p-2.5 focus:outline-none font-medium rounded-full text-center text-sm ml-2';
  const modifier = {
    '-primary': 'text-white bg-blue-400 hover:bg-blue-500',
    '-normal': 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-900',
    '-normal-border': 'text-gray-500 bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900',
  };
  const buttonStyle = (_clazz) => (modifier[_clazz] ? modifier[_clazz] : modifier['-normal']);

  const svg = {
    'delete': (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 297 297" xmlns="http://www.w3.org/2000/svg">
        <path d="M150.333 203.762c0-32.35 26.317-58.667 58.667-58.667a58.39 58.39 0 0 1 18.669 3.063l4.882-58.587H47.163l14.518 174.21C63.233 282.408 79.091 297 97.784 297h84.147c18.692 0 34.551-14.592 36.103-33.219l.173-2.081a58.851 58.851 0 0 1-9.207.729c-32.349 0-58.667-26.317-58.667-58.667z" />
        <path d="M209 158.714c-24.839 0-45.048 20.209-45.048 45.048 0 24.839 20.209 45.048 45.048 45.048s45.048-20.209 45.048-45.048c0-24.839-20.209-45.048-45.048-45.048zm22.101 57.518a6.811 6.811 0 0 1-9.632 9.631L209 213.393l-12.47 12.47a6.793 6.793 0 0 1-4.816 1.994 6.811 6.811 0 0 1-4.816-11.625l12.47-12.47-12.47-12.47a6.811 6.811 0 0 1 9.631-9.631l12.47 12.47 12.47-12.47a6.811 6.811 0 0 1 9.632 9.631l-12.47 12.47 12.47 12.47zM112.095 26.102c0-6.883 5.6-12.483 12.483-12.483h30.556c6.884 0 12.484 5.6 12.484 12.483v8.507h13.619v-8.507C181.238 11.71 169.528 0 155.135 0h-30.556c-14.392 0-26.102 11.71-26.102 26.102v8.507h13.618v-8.507zM236.762 63.643c0-8.5-6.915-15.415-15.415-15.415H58.367c-8.5 0-15.415 6.915-15.415 15.415v12.31h193.81v-12.31z" />
      </svg>
    ),
    'edit': (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 529 529" xmlns="http://www.w3.org/2000/svg">
        <path d="m328.883 89.125 107.59 107.589-272.34 272.34L56.604 361.465l272.279-272.34zm189.23-25.948-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zM.3 512.69c-1.958 8.812 5.998 16.708 14.811 14.565l119.891-29.069L27.473 390.597.3 512.69z" />
      </svg>
    ),
    'add': (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 123 123" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.993 47.079a13.747 13.747 0 0 1 13.882 13.805c-.018 7.683-6.26 13.959-13.942 14.019l-33.693.235-.235 33.73c-.063 7.619-6.338 13.789-14.014 13.78-7.678-.01-13.848-6.197-13.785-13.818l.233-33.497-33.558.235A13.747 13.747 0 0 1 0 61.764c.018-7.683 6.261-13.959 13.943-14.018l33.692-.236.236-33.73C47.935 6.161 54.209-.009 61.885 0c7.678.009 13.848 6.197 13.784 13.818l-.233 33.497 33.557-.236z"
        />
      </svg>
    ),
  };

  return (
    <button className={`${baseStyle} ${buttonStyle(clazz)} ${optionalStyle}`} onClick={onClick} type="button">
      {svg[svgname] || ''}
    </button>
  );
};
