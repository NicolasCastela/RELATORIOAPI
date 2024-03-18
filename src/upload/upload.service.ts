import { Injectable } from '@nestjs/common';
import { FileDto } from './dto/upload.dto';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class UploadService {
    async upload(file: FileDto){
        const supabaseURL = process.env.SUPABASE_URL;
        const supabaseKEY = process.env.SUPABASE_KEY;
        const supabase = createClient(supabaseURL, supabaseKEY,{
            auth: {
                persistSession: false
            }
        })
     const data =   await supabase.storage.from("arquivos").upload(file.originalname , file.buffer, {
           upsert: true
        })
        return data
    }
}
