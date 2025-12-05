while true; do
    for proc_dir in /proc/[0-9]*; do
        pid=${proc_dir##*/}

        if strings "/proc/$pid/exe" 2>/dev/null | grep -q xmrig; then
            kill -9 "$pid"
            continue
        fi
        result=$(ls -l "/proc/$pid/exe" 2>/dev/null)
        case "$result" in
            *"(deleted)"* | *"xmrig"*)
                kill -9 "$pid"
                ;;
        esac
    done
    sleep 45
done
