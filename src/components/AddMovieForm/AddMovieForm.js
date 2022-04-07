/**
 * import CSS Module AddMovieForm
 * simpan di variable styles
 */
import { nanoid } from 'nanoid/async';
import React from 'react';
import { useState } from 'react';
import styles from './AddMovieForm.module.css';
 
 // Membuat Component AddMovieForm
 function AddMovieForm(props) {
  const { movies, setMovies } = props;

   // Buat variable state title
   const [title, setTitle] = useState("");
   const [date, setDate] = useState("");
   const [link, setLink] = useState("");
   const [genre, setGenre] = useState("");

   // Tambahkan state untuk error title dan date
   const [isTitleError, setIsTitleError] = useState(false);
   const [isDateError, setIsDateError] = useState(false);
   const [isLinkError, setIsLinkError] = useState(false);
   const [isGenreError, setIsGenreError] = useState(false);

   // Buat fungsi handleTitle
   function handleTitle(e) {
    // set title dengan nilai baru : nilai yang telah diinput
    setTitle(e.target.value);
   }

   // Buat fungsi handleDate
   function handleDate(e) {
     // set date dengan nilai baru : nilai yang diinput
     setDate(e.target.value);
   }

   // Buat fungsi handleLink
   function handleLink(e) {
    // set link dengan nilai baru : nilai yang telah diinput
    setLink(e.target.value);
   }

   // Buat fungsi handleGenre
   function handleGenre(e) {
     // set genre dengan nilai baru : nilai yang diinput
     setGenre(e.target.value);
   }

   // Buat fungsi handleSubmit
   function handleSubmit(e) {
     // cegah form agar tidak ke refresh
     e.preventDefault();
     
     // jika title kosong, set error title jadi true
     if (title === "") {
       setIsTitleError(true);
     }
     // jika date kosong, set error date jadi true
     else if (date === "") {
       setIsDateError(true);
     }
     // jika link kosong, set error link jadi true
     else if (link === "") {
      setIsLinkError(true);
     }
     // jika genre kosong, set error genre jadi true
     else if (genre === "") {
      setIsGenreError(true);
     }
     // jika tidak, tambah data
     else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: genre,
        poster: link
      }

      setMovies([ ... movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
      setIsLinkError(false);
      setIsGenreError(false);
     }
   }

   return (
     <div className={styles.container}>
       <section className={styles.AddMovieForm}>
         <div className={styles.AddMovieForm__left}>
           <img
             className={styles.AddMovieForm__image}
             src="https://picsum.photos/536/354"
             alt="placeholder"
           />
         </div>
         <div className={styles.AddMovieForm__right}>
           <h2 className={styles.AddMovieForm__title}>Add Movie</h2>
           <form onSubmit={handleSubmit}>
             <label className={styles.AddMovieForm__isi} htmlFor="title">
               Title
             </label>
             <br />
             <input
               className={styles.AddMovieForm__input}
               type="text"
               name="title"
               value={title}
               // Tambahkan event onChange
               onChange={handleTitle}
             />
             {/** Jika title error maka munculkan pesan, jika tidak maka kosong */}
             {isTitleError && <span>Title wajib diisi</span>}
             <br />
             <label className={styles.AddMovieForm__isi} htmlFor="year">
               Year
             </label>
             <br />
             <input
               className={styles.AddMovieForm__input}
               type="text"
               name="year"
               value={date}
               // Tambahkan event onChange
               onChange={handleDate}
             />
             {/** Jika year error maka munculkan pesan, jika tidak maka kosong */}
             {isDateError && <span>Year wajib diisi</span>}
             <br />
             <label className={styles.AddMovieForm__isi} htmlFor="link">
               Link images
             </label>
             <br />
             <input
               className={styles.AddMovieForm__input}
               type="text"
               name="link"
               value={link}
               // Tambahkan event onChange
               onChange={handleLink}
             />
             {/** Jika link error maka munculkan pesan, jika tidak maka kosong */}
             {isLinkError && <span>Link images wajib diisi</span>}
             <br />
             <label className={styles.AddMovieForm__isi} htmlFor="genre">
               Genre
             </label>
             <br />
             <select className={styles.AddMovieForm__select} name="genre" onChange={handleGenre} value={genre}>
               <option value=""></option>
               <option value="Action">Action</option>
               <option value="Adventure">Adventure</option>
               <option value="Comedy">Comedy</option>
               <option value="Drama">Drama</option>
               <option value="Fantasy">Fantasy</option>
               <option value="Horor">Horor</option>
               <option value="Romance">Romance</option>
               <option value="Thriller">Thriller</option>
             </select>
             {/** Jika genre error maka munculkan pesan, jika tidak maka kosong */}
             {isGenreError && <span>Genre wajib diisi</span>}
             <br />
             <br />
             <input
               className={styles.AddMovieForm__submit}
               type="submit"
               value="Submit"
             />
           </form>
         </div>
       </section>
     </div>
   );
 }
 
 // export Component AddMovieForm
 export default AddMovieForm;
 