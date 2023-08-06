import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";

const NoteModal = ({ props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const onSubmit = (data) => {
    // console.log(data);
    setError({
      isError: false,
      message: "",
    });
    const formData = new FormData();
    // console.log(data?.file?.length)
    if (data.file?.length) {
      const file = data.file[0];
      if (file.size > 200800) {
        setError({
          isError: true,
          message: "Maximun size: 200 Kb",
        });
        return;
      }
      if (
        file.type == "image/webp" ||
        file.type == "image/jpeg" ||
        file.type == "image/png"
      ) {
        formData.append("image", data.file[0]);
      }else{
        setError({
            isError: true,
            message: "Only png, jpeg, webp files are valid.",
          });
          return;
      }
    }
    formData.append("title", data.title);
    formData.append("body", data.body);
    console.log(formData);
    //   fetch("", {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if(data.success){
    //         reset()
    //         alert("Successfully Added.");
    //       }
    //     });
    // } else {
    //   setError({
    //     isError: true,
    //     message: "Only png, jpeg, webp files are valid.",
    //   });
    //   return;
  };
  return (
    <Modal
      show={props.openModal === "default"}
      onClose={() => props.setOpenModal(undefined)}
    >
      <Modal.Header>Add Note</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                {...register("title", {
                  required: "Title is required",
                })}
                type="text"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.title?.message && (
                <small className="text-orange-700">
                  {errors.title.message}
                </small>
              )}
            </div>
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Body
              </label>
              <textarea
                {...register("body", {
                  required: "Body is required",
                })}
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              {errors.body?.message && (
                <small className="text-orange-700">{errors.body.message}</small>
              )}
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload file
              </label>
              <input
                {...register("file")}
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              {error.isError && (
                <small className="text-orange-700">{error.message}</small>
              )}
              {errors.file?.message && (
                <small className="text-orange-700">{errors.file.message}</small>
              )}
            </div>
            <input
              type="submit"
              class="mt-6 hover:cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            />
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
        <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoteModal;
