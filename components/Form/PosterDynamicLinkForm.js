import * as Yup from "yup";
import { Form, Formik } from "formik";
import usePostData from "../../hooks/usePostData";
import { TextField } from "../common/InputField";
import { toast } from "react-toastify";

function PosterDynamicLinkForm({ id, assignedLinks, refetchDynamicLinks }) {
  const { mutate, isLoading } = usePostData({
    path: "/link/add",
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
        toast.success("Link updated successfully");
        formik.resetForm();
        if (refetchDynamicLinks) {
          refetchDynamicLinks();
        }
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
            <h1 className="text-lg font-semibold ">Update Your Dynamic Link</h1>
            <p className="text-sm text-gray-500 mt-1">
              Select one of your assigned links and set the target URL where it should redirect.
            </p>
            <div className="pt-7 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-7">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-600 mb-1">Select Main Link *</label>
                <select
                  name="linkName"
                  className="p-2.5 w-full outline-none text-sm bg-gray-50 border border-gray-200 focus:border-gray-300 focus:shadow"
                  onChange={formik.handleChange}
                  value={formik.values.linkName}
                >
                  <option value="" disabled>Select a link</option>
                  {assignedLinks?.map((link, i) => (
                    <option key={i} value={link}>{link}</option>
                  ))}
                </select>
                {formik.errors.linkName && formik.touched.linkName && (
                  <p className="text-xs text-red-600 mt-1">{formik.errors.linkName}</p>
                )}
              </div>
              <TextField label="Target URL (where it should go) *" name="targetUrl" type="text" />
            </div>
            <div className="mt-10 flex justify-start">
              <button
                type="submit"
                className="px-9 py-4 text-white text-xs tracking-widest font-bold rounded bg-custom-blue5 hover:bg-custom-blue active:scale-95 transition duration-300 uppercase disabled:bg-opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                Update Link
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PosterDynamicLinkForm;
