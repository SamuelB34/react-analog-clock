import styles from './clock-numbers.module.scss'

interface ClockNumbers {
    number: string
}

export const ClockNumbers = ( { number }: ClockNumbers ) => {
    const show_tops = [0, 2, 3, 5, 6, 7, 8, 9]

    const show_left_top = [0, 4, 5, 6, 8, 9]
    const show_right_top = [0, 1, 2, 3, 4, 7, 8, 9]

    const show_center = [2, 3, 4, 5, 6, 8, 9]

    const show_left_bottom = [0, 2, 6, 8]
    const show_right_bottom = [0, 1, 3, 4, 5, 6, 7, 8, 9]

    const show_bottom = [0, 2, 3, 5, 6, 8, 9]


    const checkVisibility = (condition: number[]) => {
        return condition.some((value) => value === +number)
    }

    return (
        <>
            <div className={`${styles['digit']}`}>

                <div
                    className={
                        `${styles.top} 
                        ${checkVisibility(show_tops) ?
                            styles.top__filled : ''}`}
                ></div>


                {/*TOP*/}
                <div className={styles.top__center}>
                    <div
                        className={
                            `${styles.left_top} 
                        ${checkVisibility(show_left_top) ?
                                styles.left_top__filled : ''}`}
                    ></div>


                    <div
                        className={
                            `${styles.right_top} 
                        ${checkVisibility(show_right_top) ?
                                styles.right_top__filled : ''}`}
                    ></div>
                </div>

                {/*CENTER*/}
                <div
                    className={
                        `${styles.center} 
                        ${checkVisibility(show_center) ?
                            styles.center__filled : ''}`}
                ></div>


                {/*CENTER BOTTOM*/}
                <div className={styles.top__center}>
                    <div
                        className={
                            `${styles.left_top} 
                        ${checkVisibility(show_left_bottom) ?
                                styles.left_top__filled : ''}`}
                    ></div>


                    <div
                        className={
                            `${styles.right_top} 
                        ${checkVisibility(show_right_bottom) ?
                                styles.right_top__filled : ''}`}
                    ></div>
                </div>


                {/*BOTTOM*/}
                <div
                    className={
                        `${styles.bottom} 
                        ${checkVisibility(show_bottom) ?
                            styles.bottom__filled : ''}`}
                ></div>
            </div>
        </>
    );
};