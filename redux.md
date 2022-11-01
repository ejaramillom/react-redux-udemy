# react redux

a state management system for cross component or app wide state

- local state
state (data) that belongs to single component

eg listening to user input in an input field
toggling a show more details field

should be managed component internal with useState/useReducer

- cross component state
state that affects multiple components

eg open closed state in a modal overlay
requires 'props chains' or props drilling

- app wide state
state that affects the entire app

eg user authentication status

requires 'props chains' or 'props drilling'

REDUX SOLVES THE CROSS COMPONENT OR APP WIDE STATE MANAGEMENT

# why redux

react context has potential disavantages: (they might not matter in the app you are building)

both can be used at the same time to group certain components to be managed

here we can have a very complex setup and management

for example in an enterprise like app, we can end up with a component tree like this:

/*

return (
  <AuthContextProvider>
    <ThemeContextProvider>
      <UIInteractionContextProvider>
        <MultiStepFormContextProvider>
          <UserRegistration />
        </MultiStepFormContextProvider>
      <UIInteractionContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>
)

*/

so it becomes kind of a component hell

PERFORMANCE

A member of the react team builders, in 2018, stated that context is great for low frequency changes. Its not ready to be used as a replacement for all flux like state propagation

# core redux concepts

it has one central data store for states

one store for an entire app

central data => subscription => components

so the subscription sends the state data to the component

------ components never manipulate the store data!!!

we use reducer function

# reducer function

mutates the store data (these are not reducer hooks)

reducer function => mutation => central data => subscription => components

# actions

components trigger certain actions

components => dispatch => action => forwarded to reducer

# abstract

central data (store) => subscription => components
reducer function => mutation => central data (store) => subscription => components
components => dispatch => action => forwarded to reducer
