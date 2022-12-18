import { createClient } from "@supabase/supabase-js";

const API_URL = 'https://rdwzvsmkvwtboxeiwmuu.supabase.co';
const API_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkd3p2c21rdnd0Ym94ZWl3bXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzOTQ1MjQsImV4cCI6MTk4Njk3MDUyNH0.f0YfWE78UdZl30igf9GjLlP6ZfTrVd3G_UuYttvbE-g';
const supabase = createClient(API_URL, API_PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*");

        },

        createVideo(title, url, thumb, playlist){
            supabase.from('video').insert({
                title: title,
                url: url,
                thumb: thumb,
                playlist: playlist
            });

        }

    };

};