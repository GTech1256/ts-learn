type Task = {
  title: string
}

const taskAny: Task = JSON.parse(
  '{ "tile": "Title text" }'
)

console.log(taskAny.title);


// -=SOLVE=-

//  ts(2741) | Property 'title' is missing in type '{}' but required in type 'Task'. 
const taskUnknown: Task = JSON.parse(
  '{ "tile": "Title text" }'
) as unknown

// user Define Type Guard
const isTask = (obj: any)
  : obj is Task => 
  {
    return !!obj &&
      'title' in obj
  }



if (isTask(taskUnknown)) {
  console.log(taskUnknown.title)
} else {
  console.log('Это не Task')
}