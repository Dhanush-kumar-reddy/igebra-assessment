// dashboard/lib/data.js
import path from 'path';
import fs from 'fs';
import { parse } from 'papaparse';

export async function getStudentData() {
  const csvFilePath = path.join(process.cwd(), 'public', 'student_data_processed.csv');
  const csvFile = fs.readFileSync(csvFilePath, 'utf8');

  return new Promise(resolve => {
    parse(csvFile, {
      header: true,
      dynamicTyping: true,    
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
    });
  });
}