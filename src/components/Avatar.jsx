import styles from './Avatar.module.css';

export function Avatar ({ hasBorder = true, src}) {
    return(
        <img 
            className={hasBorder ? styles.avatarwithBorder : styles.avatar}
            src={src}  
        />
    )
}