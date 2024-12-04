```javascript
// app/api/route/[id]/route.js
export async function GET(request) {
  const { params } = request;
  const id = params.id;
  // Additional logic to handle the request based on id
  return new Response('Success');
}
```