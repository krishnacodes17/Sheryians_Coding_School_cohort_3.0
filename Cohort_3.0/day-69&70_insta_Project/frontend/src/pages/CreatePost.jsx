import React, { useState } from "react";
import { Image, X, Upload, Send } from "lucide-react";
import { createPostHook } from "../hooks/createPostHook";

const CreatePost = () => {
  const {removeImage, handleImageChange ,register , handleSubmit, preview , setPreview ,value ,setValue, onSubmit,errors, isSubmitting} = createPostHook()


  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Create Post</h1>

          <p className="mt-1 text-sm text-gray-500">
            Share a photo and tell everyone what&apos;s on your mind.
          </p>
        </div>

        {/* Create Post Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Image Section */}
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <label
                  htmlFor="image"
                  className="text-sm font-semibold text-gray-800"
                >
                  Add Photo
                </label>

                {preview && (
                  <button
                    type="button"
                    onClick={() =>
                      removeImage(
                        // setValue ko react-hook-form se lenge
                        setValue,
                      )
                    }
                    className="flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600"
                  >
                    <X size={16} />
                    Remove
                  </button>
                )}
              </div>

              {/* Image Preview */}
              {preview ? (
                <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                  <img
                    src={preview}
                    alt="Post preview"
                    className="max-h-[500px] w-full object-contain"
                  />
                </div>
              ) : (
                <label
                  htmlFor="image"
                  className="flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-blue-400 hover:bg-blue-50"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Upload size={28} />
                  </div>

                  <p className="text-base font-semibold text-gray-700">
                    Upload an image
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    PNG, JPG or JPEG up to 10MB
                  </p>

                  <span className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                    Choose Image
                  </span>

                  <input
                    id="image"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    className="hidden"
                    {...register("image", {
                      required: "Please select an image",
                      validate: {
                        size: (files) =>
                          !files?.[0] ||
                          files[0].size <= 10 * 1024 * 1024 ||
                          "Image must be less than 10MB",

                        type: (files) =>
                          !files?.[0] ||
                          ["image/jpeg", "image/png", "image/jpg"].includes(
                            files[0].type,
                          ) ||
                          "Only JPG, JPEG and PNG images are allowed",
                      },

                      onChange: handleImageChange,
                    })}
                  />
                </label>
              )}

              {/* Image Error */}
              {errors.image && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.image.message}
                </p>
              )}

              {/* Caption */}
              <div className="mt-6">
                <label
                  htmlFor="caption"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Caption
                </label>

                <textarea
                  id="caption"
                  rows={5}
                  maxLength={500}
                  placeholder="Write something about your post..."
                  className={`w-full resize-none rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 ${
                    errors.caption
                      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
                  }`}
                  {...register("caption", {
                    required: "Caption is required",
                    minLength: {
                      value: 3,
                      message: "Caption must be at least 3 characters",
                    },
                    maxLength: {
                      value: 500,
                      message: "Caption cannot exceed 500 characters",
                    },
                  })}
                />

                {errors.caption && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.caption.message}
                  </p>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-6 py-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Image size={18} />
                <span>Create your post</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={17} />

                {isSubmitting ? "Creating..." : "Create Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
