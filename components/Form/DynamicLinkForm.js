import * as Yup from "yup";
import { Form, Formik } from "formik";
import usePostData from "../../hooks/usePostData";
import { TextField } from "../common/InputField";
import { toast } from "react-toastify";

function DynamicLinkForm({ id }) {
  const { mutate, isLoading } = usePostData({
    path: "/link/add",
    revalidate: `/link/get/${id}`,
  });

  const initialValues = {
    linkName: "",
    targetUrl: "",
  };

  const validate = Yup.object({
    linkName: Yup.string().required("Main Link is required"),
    targetUrl: Yup.string().url("Must be a valid URL").required("Target URL is required"),
  });

  const handleSubmit = (values, formik) => {
    const submitValues = {
      ...values,
      root: id,
    };

    mutate(submitValues, {
      onSuccess: () => {
        toast.success("Dynamic link created/updated successfully");
        formik.resetForm();
      },
    });
  };

  return (
    <div className="mt-7">
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <h1 className="text-lg font-semibold ">Create Dynamic Link</h1>
            <div className="pt-7 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-7">
              <TextField label="Main Link (e.g. mysite.com/xyz) *" name="linkName" type="text" />
              <TextField label="Target URL (where it should go) *" name="targetUrl" type="text" />
            </div>
            <div className="mt-10 flex justify-start">
              <button
                type="submit"
                className="px-9 py-4 text-white text-xs tracking-widest font-bold rounded bg-custom-blue5 hover:bg-custom-blue active:scale-95 transition duration-300 uppercase disabled:bg-opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                Create Link
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DynamicLinkForm;
