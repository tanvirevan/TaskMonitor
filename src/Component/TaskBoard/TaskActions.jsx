import PropTypes from 'prop-types';

export default function TaskActions({onAddTask, onDeleteAll}) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
          <button
              className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
              onClick={onAddTask}
          >
              Add Task
          </button>
          <button
              className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
              onClick = {onDeleteAll}
          >
              Done All
          </button>
      </div>
    </div>

  )
}
TaskActions.propTypes = 
  {
      onAddTask: PropTypes.func.isRequired,
      onDeleteAll: PropTypes.func.isRequired
  };