import {startFaceRecognition} from './face-verification.js'

function aadharauth(){
    if (startFaceRecognition.faceLabel == "known" && startFaceRecognition.faceScore <= 0.45)
    {
        const labeledDescriptors = Object.keys(descriptors).map((label) => {
            const descriptor = descriptors[label]
            return new faceapi.LabeledFaceDescriptors(label, descriptor);
        });
    
        return labeledDescriptors;
      }
    }
    
