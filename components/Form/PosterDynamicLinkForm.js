import * as Yup from "yup";
import { Form, Formik } from "formik";
import usePostData from "../../hooks/usePostData";
import { TextField } from "../common/InputField";
import { toast } from "react-toastify";

function PosterDynamicLinkForm({ id, assignedLinks, refetchDynamicLinks }) {
  const { mutate, isLoading } = usePostData({
    path: "/link/add",
  });

  // console.log(assignedLinks);

  const initialValues = {
    baseLink: "",
    path: "",
  };

  const validate = Yup.object({
    baseLink: Yup.string().required("Base Link is required"),
    path: Yup.string().required("Path is required"),
  });

  const handleSubmit = (values, formik) => {
    let base = values.baseLink || "";
    if (base.endsWith("/")) {
      base = base.slice(0, -1);
    }
    let customPath = (values.path || "").trim();
    if (customPath && !customPath.startsWith("/")) {
      customPath = "/" + customPath;
    }
    const combinedLinkName = `${base}${customPath}`;

    if (!base) {
      toast.error("Base Link is required");
      return;
    }

    const submitValues = {
      linkName: combinedLinkName,
      targetUrl: "",
      root: id,
    };

    mutate(submitValues, {
      onSuccess: () => {
        toast.success("Dynamic link created/updated successfully");
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
            <h1 className="text-lg font-semibold ">Create Dynamic Link</h1>
            <p className="text-sm text-gray-500 mt-1">
              Select one of your assigned links and set a custom path to build your dynamic link.
            </p>
            <div className="pt-7 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-7">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-600 mb-1">
                  Select Base Link *
                </label>
                <select
                  name="baseLink"
                  className="p-2.5 w-full outline-none text-sm bg-gray-50 border border-gray-200 focus:border-gray-300 focus:shadow"
                  onChange={formik.handleChange}
                  value={formik.values.baseLink}
                >
                  <option value="" disabled>
                    Select a link
                  </option>
                  {assignedLinks?.map((link, i) => (
                    <option key={i} value={link}>
                      {typeof link === 'string' ? link.split("https://").join("") : String(link)}
                    </option>
                  ))}
                </select>
                {formik.errors.baseLink && formik.touched.baseLink && (
                  <p className="text-xs text-red-600 mt-1">
                    {formik.errors.baseLink}
                  </p>
                )}
              </div>
              <TextField
                label="Path (e.g. /rahim, /rcho) *"
                name="path"
                type="text"
                placeholder="/rahim"
              />
            </div>

            {formik.values.baseLink && formik.values.path && (
              <div className="mt-5 p-4 bg-gray-50 rounded border border-gray-200 text-sm">
                <span className="font-semibold text-gray-700">Preview Dynamic Link: </span>
                <code className="text-custom-blue5 font-mono bg-white px-2 py-1 rounded border border-gray-200 ml-1">
                  {`${formik.values.baseLink}${formik.values.path?.startsWith("/") ? "" : "/"}${formik.values.path}`}
                </code>
              </div>
            )}

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

export default PosterDynamicLinkForm;
