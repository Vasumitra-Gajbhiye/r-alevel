import { Schema, model, models } from "mongoose";

const certDataSchema = new Schema({
  name: String,
  certType: String,
  certId: String,
  issueDate: String,
});

const CertData = models.CertData || model("CertData", certDataSchema);

export default CertData;
