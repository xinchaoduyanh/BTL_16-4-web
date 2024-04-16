import { useForm } from "react-hook-form";

const CreatePost = () => {
  // Initialize the form
  const { register, handleSubmit, reset } = useForm();

  // Define a function to handle form submissions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    // You can handle the form data here, e.g., save it to a database or state
    console.log("New Post:", data);

    // Reset the form after submission
    reset();
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Create a New Post</h2>
      {/* The form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title input field */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            {...register("title")}
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Description input field */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="Enter post description"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
